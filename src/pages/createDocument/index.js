import DocumentForm from '../../components/Form/Document';
import AdminLayout from '../../layouts/Admin';

export default function CreateDocument() {
  return <DocumentForm />;
}

CreateDocument.Layout = AdminLayout;
CreateDocument.auth = true;
