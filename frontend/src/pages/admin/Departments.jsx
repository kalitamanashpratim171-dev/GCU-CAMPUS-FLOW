import { useState } from 'react';
import {
    Building2,
    Users,
    IndianRupee,
    ShieldCheck,
    Download,
    Filter,
    LayoutGrid,
    AlignJustify,
    PlusSquare,
    Building,
    CheckCircle2,
    AlertCircle,
    TrendingUp,
    FileText,
    BadgeCent,
    FileCheck
} from 'lucide-react';

export default function Departments() {
    const departmentsList = [
        {
            id: 1, logo: 'CSE', logoColor: 'bg-indigo-50 text-indigo-700',
            school: 'SCHOOL OF TECHNOLOGY', name: 'Dept. of Computer Science & Engineering',
            badge1: 'NAAC Compliant', badge2: 'Tier-1 Approved', badgeColor: 'bg-emerald-100 text-emerald-800',
            image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop',
            events: '8 Active Events (AY 2024-25)', highlights: 'TechVenture • Cloud Sec',
            headAvatar: 'PB', headName: 'Dr. Pranjal Barman', headRole: 'Assoc. Professor • AI & Distribu...',
            headTag: 'Lead Convener',
            stat1Label: 'Faculty Strength', stat1Value: '28 Members',
            stat2Label: 'Enrolled Students', stat2Value: '720 Scholars',
            budgetLabel: 'Annual Co-Curricular Grant', budgetVal: '₹4,50,000', budgetPercent: 72,
            bottom1Label: 'Duty Leaves: 420 Students', bottom2Label: '98.6% compliance'
        },
        {
            id: 2, logo: 'ECE', logoColor: 'bg-blue-50 text-blue-700',
            school: 'SCHOOL OF TECHNOLOGY', name: 'Dept. of Electronics & Communication',
            badge1: 'Verified', badge2: 'Active Term', badgeColor: 'bg-emerald-50 text-emerald-700', badgeDot: true,
            image: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?q=80&w=400&auto=format&fit=crop',
            events: '5 Active Events (AY 2024-25)', highlights: 'Robotics • IoT Expo',
            headAvatar: 'DS', headName: 'Prof. Debojit Sarma', headRole: 'Professor • VLSI & Embedded ...',
            headTag: 'Senior Faculty',
            stat1Label: 'Faculty Strength', stat1Value: '22 Members',
            stat2Label: 'Enrolled Students', stat2Value: '480 Scholars',
            budgetLabel: 'Annual Co-Curricular Grant', budgetVal: '₹3,20,000', budgetPercent: 60,
            bottom1Label: 'Duty Leaves: 290 Students', bottom2Label: '97.2% compliance'
        },
        {
            id: 3, logo: 'SPS', logoColor: 'bg-teal-50 text-teal-700',
            school: 'HEALTH & CLINICAL SCIENCES', name: 'School of Pharmaceutical Sciences',
            badge1: 'PCI Accredited', badge2: 'High Active Rate', badgeColor: 'bg-teal-100 text-teal-800',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop',
            events: '6 Active Events (AY 2024-25)', highlights: 'Pharmacovigilance Summit',
            headAvatar: 'RD', headName: 'Dr. Rupali Dutta', headRole: 'Professor & Dean • Pharmacolo...',
            headTag: 'Council Member', headTitle: 'DEAN & FACULTY LEAD',
            stat1Label: 'Faculty Strength', stat1Value: '34 Members',
            stat2Label: 'Enrolled Students', stat2Value: '540 Scholars',
            budgetLabel: 'Annual Co-Curricular Grant', budgetVal: '₹4,00,000', budgetPercent: 85,
            bottom1Label: 'Duty Leaves: 380 Students', bottom2Label: '99.1% compliance'
        },
        {
            id: 4, logo: 'MCE', logoColor: 'bg-blue-50 text-blue-700',
            school: 'SCHOOL OF TECHNOLOGY', name: 'Dept. of Mechanical & Civil Engineering',
            badge1: 'Normal Load', badge2: 'Verified', badgeColor: 'bg-slate-100 text-slate-700',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop',
            events: '4 Active Events (AY 2024-25)', highlights: 'CAD Hackathon • TechLab',
            headAvatar: 'MS', headName: 'Dr. M. K. Sharma', headRole: 'Professor • Structural Dynamics',
            headTag: 'Co-Lead',
            stat1Label: 'Faculty Strength', stat1Value: '30 Members',
            stat2Label: 'Enrolled Students', stat2Value: '620 Scholars',
            budgetLabel: 'Annual Co-Curricular Grant', budgetVal: '₹3,00,000', budgetPercent: 45,
            bottom1Label: 'Duty Leaves: 210 Students', bottom2Label: '96.5% compliance'
        },
        {
            id: 5, logo: 'DMS', logoColor: 'bg-slate-100 text-slate-700',
            school: 'SCHOOL OF HUMANITIES & MGMT', name: 'Dept. of Management Studies',
            badge1: 'Active', badge2: 'Accreditation OK', badgeColor: 'bg-emerald-50 text-emerald-700', badgeDot: true,
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop',
            events: '3 Active Events (AY 2024-25)', highlights: 'B-Plan Pitch • FinTech',
            headAvatar: 'SB', headName: 'Dr. Sanjib Borah', headRole: 'Professor • Strategic Marketing...',
            headTag: 'Placement Lead',
            stat1Label: 'Faculty Strength', stat1Value: '18 Members',
            stat2Label: 'Enrolled Students', stat2Value: '390 Scholars',
            budgetLabel: 'Annual Co-Curricular Grant', budgetVal: '₹2,50,000', budgetPercent: 50,
            bottom1Label: 'Duty Leaves: 165 Students', bottom2Label: '97.8% compliance'
        },
        {
            id: 6, logo: 'CII', logoColor: 'bg-emerald-50 text-emerald-700',
            school: 'CENTRAL UNIVERSITY CELL', name: 'Centre for Innovation & Incubation',
            badge1: 'Inter-disciplinary', badge2: 'Startup Hub', badgeColor: 'bg-teal-50 text-teal-700', badgeDot: true,
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop',
            events: '4 Active Hackathons', highlights: 'Venture Sprint • Assam Bio',
            headAvatar: 'AK', headName: 'Dr. Anita Kalita', headRole: 'Director • IPR & Technology Tra...',
            headTag: 'TBI Head', headTitle: 'DIRECTOR OF INNOVATION',
            stat1Label: 'Affiliated Mentors', stat1Value: '14 Mentors',
            stat2Label: 'Incubated Startups', stat2Value: '24 Teams',
            budgetLabel: 'Annual Innovation Seed Pool', budgetVal: '₹3,80,000', budgetPercent: 68,
            bottom1Label: 'Seed Grants: 9 Ventures', bottom2Label: '100% Milestone Track', bottomAltIcon: true
        }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2 space-y-6">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest">
                    Campus Home &gt; Administration &gt; Campus Directory &gt; <span className="text-primary">Academic Departments</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-2">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase shadow-sm">Institutional Deanery</span>
                        <span className="text-[12px] font-bold text-slate-500">• Office of Academic Registrar</span>
                    </div>
                    <h1 className="text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-3">
                        Academic Departments &<br />Faculty Deaneries
                    </h1>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                        Institutional governance across university schools, designated faculty event coordinators, co-curricular grant quotas, and accreditation metrics.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full xl:w-auto shrink-0 mt-4 xl:mt-0">
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <Download className="w-4 h-4 text-slate-400" /> Dept Dossier
                    </button>
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <IndianRupee className="w-4 h-4 text-slate-400" /> Reallocate Quotas
                    </button>
                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <PlusSquare className="w-4 h-4" /> Add Department / Cell
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Departments /<br />Centers</h3>
                        <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600"><Building className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-[36px] font-bold text-slate-900 leading-none tracking-tight">14</span>
                        <span className="text-[11px] font-bold text-slate-500">Active Units</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-bold pt-3 border-t border-slate-100 text-slate-600">
                        <span>Across 4<br />Constituent Schools</span>
                        <span className="text-primary text-right">100% On-<br />Campus</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Faculty<br />Coordinators</h3>
                        <div className="w-8 h-8 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600"><Users className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[36px] font-bold text-slate-900 leading-none tracking-tight">68</span>
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-1.5 py-0.5 rounded text-[10px] font-bold">+6 this term</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-bold pt-3 border-t border-slate-100 text-slate-600">
                        <span>Designated Lead<br />Conveners</span>
                        <span className="text-slate-800 text-right">4.8 per<br />Dept Avg</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Co-Curricular<br />Budget</h3>
                        <div className="w-8 h-8 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600"><IndianRupee className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-[32px] font-bold text-slate-900 leading-none tracking-tight">₹24.50L</span>
                        <span className="text-[11px] font-bold text-slate-500">Allocated</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-bold pt-3 border-t border-slate-100 text-slate-600">
                        <span>₹14.80L Disbursed<br /><span className="text-slate-400 font-medium">(60.4%)</span></span>
                        <span className="text-right">₹9.70L<br />Reserve</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">NAAC Criterion 5<br /></h3>
                        <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600"><ShieldCheck className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[36px] font-bold text-slate-900 leading-none tracking-tight">98.4%</span>
                        <span className="bg-teal-50 text-teal-700 border border-teal-100 px-1.5 py-0.5 rounded text-[10px] font-bold flex flex-col leading-tight items-center">Tier-1<br />Ready</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-bold pt-3 border-t border-slate-100 text-slate-600">
                        <span>Student Support &<br />Progression</span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded">Endorsed</span>
                    </div>
                </div>
            </div>

            {/* Filter and View Toggles */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-1">
                <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
                    <button className="bg-[#0f172a] text-white px-4 py-2 rounded-full text-[12px] font-bold whitespace-nowrap shadow-sm">All Units (14)</button>
                    <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-[12px] font-bold hover:bg-slate-50 transition-colors whitespace-nowrap shadow-sm">School of Technology (6)</button>
                    <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-[12px] font-bold hover:bg-slate-50 transition-colors whitespace-nowrap shadow-sm">Pharmaceutical Sciences (2)</button>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="hidden lg:flex items-center gap-2 text-[12px] font-medium text-slate-500">
                        <Filter className="w-4 h-4 text-slate-400" /> Filter by faculty or HOD.
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-slate-50 text-primary border border-slate-200 px-3 py-2 rounded-[8px] text-[12px] font-bold flex items-center gap-1.5 transition-colors shadow-sm">
                            <LayoutGrid className="w-4 h-4" /> Grid View
                        </button>
                        <button className="bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 px-3 py-2 rounded-[8px] text-[12px] font-bold flex items-center gap-1.5 transition-colors shadow-sm">
                            <AlignJustify className="w-4 h-4" /> Summary Matrix
                        </button>
                    </div>
                </div>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departmentsList.map(dept => (
                    <div key={dept.id} className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">

                        {/* Top Info */}
                        <div className="p-5 flex gap-4 items-start">
                            <div className={`w-12 h-12 rounded-[10px] flex items-center justify-center font-bold text-[18px] shrink-0 border border-slate-100 shadow-sm ${dept.logoColor}`}>
                                {dept.logo}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{dept.school}</span>
                                    <span className={`px-2 py-0.5 rounded-[4px] text-[9px] font-bold flex items-center gap-1 shrink-0 ${dept.badgeColor}`}>
                                        {dept.badgeDot && <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse"></div>}
                                        {dept.badge1}
                                    </span>
                                </div>
                                <h3 className="text-[15px] font-bold text-slate-900 leading-tight pr-6">{dept.name}</h3>
                                <div className="mt-2 text-[10px] text-slate-500 font-medium">{dept.badge2}</div>
                            </div>
                        </div>

                        {/* Collage / Image */}
                        <div className="relative h-28 w-full bg-slate-100">
                            <img src={dept.image} alt={dept.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-2 left-2 right-2 flex gap-2">
                                <span className="bg-white/90 backdrop-blur text-slate-800 px-2 py-1 rounded text-[10px] font-bold shadow-sm">{dept.events}</span>
                                <span className="bg-white/90 backdrop-blur text-slate-800 px-2 py-1 rounded text-[10px] font-bold shadow-sm flex-1 truncate text-center">{dept.highlights}</span>
                            </div>
                        </div>

                        {/* Body Info */}
                        <div className="p-5 space-y-5 flex-1 flex flex-col">

                            {/* Head Profile */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-bold text-[12px] shadow-inner shrink-0">
                                    {dept.headAvatar}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex justify-between items-start mb-0.5">
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{dept.headTitle || 'HEAD OF DEPARTMENT'}</span>
                                        <span className="text-[10px] font-medium text-slate-500">{dept.headTag}</span>
                                    </div>
                                    <p className="text-[13px] font-bold text-slate-800 leading-tight truncate">{dept.headName}</p>
                                    <p className="text-[11px] text-slate-500 font-medium truncate">{dept.headRole}</p>
                                </div>
                            </div>

                            {/* Twin Stats */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-[8px] text-center">
                                    <span className="text-[10px] text-slate-500 font-medium block mb-0.5">{dept.stat1Label}</span>
                                    <span className="text-[14px] font-bold text-slate-800">{dept.stat1Value}</span>
                                </div>
                                <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-[8px] text-center">
                                    <span className="text-[10px] text-blue-700 font-medium block mb-0.5">{dept.stat2Label}</span>
                                    <span className="text-[14px] font-bold text-primary">{dept.stat2Value}</span>
                                </div>
                            </div>

                            {/* Budget Progress */}
                            <div className="mt-auto">
                                <div className="flex justify-between items-end mb-1.5">
                                    <span className="text-[10px] font-medium text-slate-500 truncate">{dept.budgetLabel}</span>
                                    <span className="text-[12px] font-bold text-slate-800">{dept.budgetVal} <span className="font-medium text-[10px] text-slate-500">({dept.budgetPercent}% Utilized)</span></span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${dept.budgetPercent}%` }}></div>
                                </div>
                            </div>

                            {/* Sub compliance */}
                            <div className="flex justify-between items-center text-[11px] font-bold text-slate-600 pt-1">
                                <span className="flex items-center gap-1.5">
                                    {dept.bottomAltIcon ? <BadgeCent className="w-3.5 h-3.5 text-slate-400" /> : <Users className="w-3.5 h-3.5 text-slate-400" />}
                                    {dept.bottom1Label}
                                </span>
                                <span className="text-emerald-700 flex flex-col text-right leading-tight">
                                    {dept.bottom2Label}
                                </span>
                            </div>

                        </div>

                        {/* Footer Actions */}
                        <div className="border-t border-slate-100 flex p-2">
                            <button className="flex-1 py-1.5 text-[11px] font-bold text-slate-500 hover:text-slate-900 flex items-center justify-center gap-1.5 transition-colors"><FileText className="w-3.5 h-3.5" /> Dossier</button>
                            <button className="flex-1 py-1.5 text-[11px] font-bold text-slate-500 hover:text-slate-900 flex flex-col items-center justify-center leading-tight transition-colors">Coordinators <span className="text-[9px] font-medium">({dept.id === 1 ? 4 : dept.id === 2 ? 3 : dept.id === 3 ? 5 : dept.id === 4 ? 4 : dept.id === 5 ? 2 : 6})</span></button>
                            <button className="flex-1 py-1.5 text-[11px] font-bold text-slate-500 hover:text-slate-900 flex flex-col items-center justify-center leading-tight transition-colors">{dept.id === 6 ? 'Seed\nLedger' : 'Budget\nLedger'}</button>
                        </div>

                    </div>
                ))}
            </div>

            {/* Bottom Legal/Endorsement Banner */}
            <div className="bg-[#0f172a] rounded-[16px] p-6 shadow-md flex flex-col md:flex-row items-center gap-6 mt-6">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
                        <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Official Resolution • Deanery Endorsement</span>
                    </div>
                    <h3 className="text-[18px] font-bold text-white mb-2 leading-tight">Academic Council Resolution on Inter-Departmental Co-Hosting</h3>
                    <p className="text-[13px] text-slate-400 font-medium leading-relaxed max-w-4xl">
                        All multi-departmental symposiums and conclaves are eligible for shared institutional revenue credits and unified NAAC Criterion 5 activity points. Grant utilization balances over 80% automatically trigger additional reserve release requests for student enrichment activities.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                    <button className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-5 py-2.5 rounded-[8px] text-[13px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <FileCheck className="w-4 h-4" /> Read Charter
                    </button>
                    <button className="bg-emerald-600 text-white hover:bg-emerald-500 shadow-sm px-5 py-2.5 rounded-[8px] text-[13px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <CheckCircle2 className="w-4 h-4" /> View Council Log
                    </button>
                </div>
            </div>

        </div>
    );
}
