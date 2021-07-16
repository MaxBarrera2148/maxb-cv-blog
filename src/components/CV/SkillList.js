import React from 'react'
import { Card, Row, Col, Tag } from 'antd'

const SkillList = ({ skills }) => (
  <div>
    <Row type="flex" justify="space-around">
      <Col span={11}>
        <h3 className="text-center mt-10 mb-5">Soft skills</h3>
      </Col>
      <Col span={11} offset={1}>
        <h3 className="text-center mt-10 mb-5">Hard skills</h3>
      </Col>
    </Row>
    <Card className="">
      <Row type="flex" justify="space-around">
        <Col span={11}>
          <div>
            {skills.soft.featured.map(skill => (
              <Tag color="#00483c" key={skill} className="mb-1 text-base">
                {skill}
              </Tag>
            ))}
          </div>
          {skills.soft.other.map(skill => (
            <Tag color="green" key={skill} className="mb-1 text-base">
              {skill}
            </Tag>
          ))}
        </Col>
        <Col span={11} offset={1}>
          <div>
            {skills.hard.featured.map(skill => (
              <Tag color="#00ffd4" key={skill} className="mb-1 text-base">
                {skill}
              </Tag>
            ))}
          </div>
          {skills.hard.other.map(skill => (
            <Tag color="turquoise" key={skill} className="mb-1 text-base">
              {skill}
            </Tag>
          ))}
        </Col>
      </Row>
    </Card>
  </div>
)

export default SkillList
