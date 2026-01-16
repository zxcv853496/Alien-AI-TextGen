import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Video,
  Clock,
  CreditCard,
  Plus,
  Search,
  FileVideo,
} from 'lucide-react';

const DashboardPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNewProject = () => {
    navigate('/editor');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:py-12 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{t('dashboard.title')}</h2>
          <p className="text-slate-500 text-sm">{t('dashboard.subtitle')}</p>
        </div>
        <button
          onClick={handleNewProject}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-200 transition-transform active:scale-95"
        >
          <Plus className="w-5 h-5" />
          {t('dashboard.new_project')}
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Video className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">12</div>
            <div className="text-xs text-slate-500 font-medium uppercase">
              {t('dashboard.stats.videos')}
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">45m</div>
            <div className="text-xs text-slate-500 font-medium uppercase">
              {t('dashboard.stats.time')}
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">1,250</div>
            <div className="text-xs text-slate-500 font-medium uppercase">
              {t('dashboard.stats.credits')}
            </div>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h3 className="font-bold text-slate-800">{t('dashboard.recent')}</h3>
          <div className="flex gap-2">
            <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">{t('dashboard.table.name')}</th>
                <th className="px-6 py-4">{t('dashboard.table.status')}</th>
                <th className="px-6 py-4">{t('dashboard.table.date')}</th>
                <th className="px-6 py-4">{t('dashboard.table.duration')}</th>
                <th className="px-6 py-4 text-right">{t('dashboard.table.action')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {/* Item 1 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                    <FileVideo className="w-5 h-5" />
                  </div>
                  My_Vlog_Ep01.mp4
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    {t('dashboard.status.done')}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500">2023-10-24</td>
                <td className="px-6 py-4 text-slate-500">10:23</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium text-xs border border-indigo-200 px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors">
                    {t('dashboard.btn_download')}
                  </button>
                </td>
              </tr>
              {/* Item 2 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                    <FileVideo className="w-5 h-5" />
                  </div>
                  Podcast_Interview_Cut.mov
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {t('dashboard.status.processing')}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500">剛剛</td>
                <td className="px-6 py-4 text-slate-500">05:12</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 cursor-not-allowed font-medium text-xs px-3 py-1.5">
                    {t('dashboard.btn_wait')}
                  </button>
                </td>
              </tr>
              {/* Item 3 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                    <FileVideo className="w-5 h-5" />
                  </div>
                  Shorts_Demo.mp4
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    {t('dashboard.status.draft')}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500">2023-10-20</td>
                <td className="px-6 py-4 text-slate-500">00:59</td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={handleNewProject}
                    className="text-slate-600 hover:text-slate-900 font-medium text-xs border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {t('dashboard.btn_edit')}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
