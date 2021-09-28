import styles from './index.less';
import { PageContainer, PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Button } from 'antd';

export default function IndexPage({ children }) {
  const columns: ProColumns[] = [
    {
      dataIndex: 2,
      title: 'ss',
    },
  ];
  return (
    <PageContainer>
      <ProTable columns={columns}></ProTable>
    </PageContainer>
  );
}
