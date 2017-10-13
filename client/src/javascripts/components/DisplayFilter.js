import React from 'react'
import { Grid, Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap'
import Datetime from 'react-datetime'

const formats = [
  'pcap',
  'ek',
  'fields',
  'json',
  'jsonraw',
  'pdml',
  'ps',
  'psml',
  'tabs',
  'text',
]

export default class DisplayFilter extends React.Component {
  render() {
    return (
      <div className="DisplayFilter">
        {(this.props.mainNavState === 'flowRate' ||
          this.props.mainNavState === 'packetInterval' ||
          this.props.mainNavState === 'filter') && (
          <Grid className="DisplayFilterGrid">
            <Row className="show-grid">
              <Col xs={4} md={2} className="DisplayFilterText">
                ネットワーク層
              </Col>
              <Col xs={4} md={2}>
                <FormGroup controlId="formControlsSelect1">
                  <FormControl
                    componentClass="select"
                    onChange={this.props.onChange.bind(this, 'network')}
                  >
                    <option value="" />
                    <option value="ipv4">IPv4</option>
                    <option value="ipv6">IPv6</option>
                    <option value="icmp">ICMP</option>
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>
            {(this.props.mainNavState === 'packetInterval' ||
              this.props.mainNavState === 'filter') && (
              <Row className="show-grid">
                <Col xs={4} md={2} className="DisplayFilterText textFirst">
                  送信元IPアドレス
                </Col>
                <Col xs={4} md={2}>
                  <FormGroup controlId="formControlsText1">
                    <FormControl
                      type="text"
                      onChange={this.props.onChange.bind(this, 'src_ip')}
                    />
                  </FormGroup>
                </Col>
                <Col xs={4} md={2} className="DisplayFilterText textSecond">
                  宛先IPアドレス
                </Col>
                <Col xs={4} md={2}>
                  <FormGroup controlId="formControlsText2">
                    <FormControl
                      type="text"
                      onChange={this.props.onChange.bind(this, 'dst_ip')}
                    />
                  </FormGroup>
                </Col>
              </Row>
            )}
            <Row className="show-grid">
              <Col xs={4} md={2} className="DisplayFilterText">
                トランスポート層
              </Col>
              <Col xs={4} md={2}>
                <FormGroup controlId="formControlsSelect2">
                  <FormControl
                    componentClass="select"
                    onChange={this.props.onChange.bind(this, 'transport')}
                  >
                    <option value="" />
                    <option value="tcp">TCP</option>
                    <option value="udp">UDP</option>
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={4} md={2} className="DisplayFilterText">
                アプリケーション層
              </Col>
              <Col xs={4} md={2}>
                <FormGroup controlId="formControlsSelect3">
                  <FormControl
                    componentClass="select"
                    onChange={this.props.onChange.bind(this, 'application')}
                  >
                    <option value="" />
                    <option value="http">HTTP</option>
                    <option value="dns">DNS</option>
                    <option value="ftp">FTP</option>
                    <option value="ssh">SSH</option>
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>
            {(this.props.mainNavState === 'packetInterval' ||
              this.props.mainNavState === 'filter') && (
              <Row className="show-grid">
                <Col xs={4} md={2} className="DisplayFilterText textFirst">
                  送信元ポート番号
                </Col>
                <Col xs={4} md={2}>
                  <FormGroup controlId="formControlsText3">
                    <FormControl
                      type="text"
                      onChange={this.props.onChange.bind(this, 'src_port')}
                    />
                  </FormGroup>
                </Col>
                <Col xs={4} md={2} className="DisplayFilterText textSecond">
                  宛先IPポート番号
                </Col>
                <Col xs={4} md={2}>
                  <FormGroup controlId="formControlsText4">
                    <FormControl
                      type="text"
                      onChange={this.props.onChange.bind(this, 'dst_port')}
                    />
                  </FormGroup>
                </Col>
              </Row>
            )}
          </Grid>
        )}
        <Grid className="DisplayFilterGrid">
          <Row className="show-grid">
            <Col xs={4} md={2} className="DisplayFilterText">
              期間
            </Col>
            <Col xs={4} md={2}>
              <Datetime
                locale="ja"
                onChange={this.props.onChange.bind(this, 'period_start')}
              />
            </Col>
            <div className="DisplayFilterDatetimeRange"> 〜 </div>
            <Col xs={4} md={2}>
              <Datetime
                locale="ja"
                onChange={this.props.onChange.bind(this, 'period_end')}
              />
            </Col>
          </Row>
        </Grid>
        {this.props.mainNavState === 'filter' && (
          <Grid className="DisplayFilterGrid">
            <Row className="show-grid">
              <Col xs={4} md={2} className="DisplayFilterText">
                出力フォーマット
              </Col>
              <Col xs={4} md={2}>
                <FormGroup controlId="formControlsSelect4">
                  <FormControl
                    componentClass="select"
                    onChange={this.props.onChange.bind(this, 'format')}
                  >
                    {formats.map(format => (
                      <option value={format}>{format}</option>
                    ))}
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={4} md={2} className="DisplayFilterText">
                出力ファイル名
              </Col>
              <Col xs={4} md={4}>
                <FormGroup controlId="formControlsText5">
                  <FormControl
                    type="text"
                    onChange={this.props.onChange.bind(this, 'output_file')}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Grid>
        )}
        <Grid className="DisplayFilterGrid">
          <Row className="show-grid">
            <Col xs={2} md={2} smOffset={5}>
              <Button
                bsStyle="primary"
                bsSize="large"
                type="submit"
                className="submitBtn"
                onClick={this.props.onSubmit}
              >
                実行
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}